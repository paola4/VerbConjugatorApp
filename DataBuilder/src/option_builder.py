import json
import os, re
import sys

class OptionBuilder:

    def __init__(self, attr_dict_list, app_order, path, case="l"):
        """
        Class creates individual JSON files containing all elements of the individual options, 
        with no duplicates

        Args:
            dict_list (list): List of dictionaries 
        """

        self.attr_dict_list = attr_dict_list
        self.attrs = {}
        self.app_order = app_order
        self.path = path
        self.case = case
        self.removeDupes()
        self.writeAttr()


    def removeDupes(self):
        """
        Removes duplicates by adding each element to its respective dictionary attr set
        """
        
        for key in self.attr_dict_list[0].keys():
            self.attrs[key] = set()

        for d in self.attr_dict_list:
            for attr in d:
                self.attrs[attr].add(tuple(d[attr].items()))

        for key in self.attrs:
            temp = [dict(t) for t in self.attrs[key]]
            self.attrs[key] = temp
        

    def writeAttr(self):
        """
        Creates each file using the attr dictionary where each key has a set of unique values.
        Files are saved to the 'data' folder.
        """
        if not os.path.exists(self.path):
            os.makedirs(self.path)
        major_output_file = self.path+"information.json"
        major = {}
        for attr in self.attrs:
            if self.app_order:
                if attr not in self.app_order:
                    continue
            tojson = {"name":attr, "children":[]}
            for value in self.attrs[attr]:
                if "base" in value:
                    if self.case == "u":
                        value["base"] = value["base"].upper()
                    elif self.case == "t":
                        if len(value["base"])>1:
                            value["base"] = value["base"][0].upper() + value["base"][1:]
                        elif len(value["base"])==1:
                            value["base"] = value["base"].upper()
                if "translation" in value:
                    if len(value["translation"])>1:
                            value["translation"] = value["translation"][0].upper() + value["translation"][1:]
                    if len(value["translation"]) == 1:
                        value["translation"] = value["translation"].upper()
                    value["translation"] = re.sub(r" i ", r" I ", value["translation"])
                    value["translation"] = re.sub(r" i$", r" I", value["translation"])
                tojson["children"].append(value)
            newlist = sorted(tojson["children"], key=lambda k: k['id']) 
            tojson["children"] = newlist

            re_ordered = self.orderOptions(tojson)

            major[attr] = re_ordered

        if self.app_order:
            temp = []
            for d in self.app_order:
                temp.append(major[d])
            major = temp
        else:
            major = list(major.values())

        with open(major_output_file, 'w') as json_file:
            json.dump(major, json_file,indent=4)

    def orderOptions(self, attrdicts):
        orders = {"concept":
        ["1sgnone", "1sgni3sg", "1sg3sg", 
        "2sgnone", "2sgni3sg", "2sg3sg",
        "3sgnone", "3sgni3sg", "3sg3'",
        "1plnone", "1plni3sg", "1pl3sg",
        "2plnone", "2plni3sg", "2pl3sg",
        "3plnone", "3plni3sg", "3pl3'",
        "2inone", "2ini3sg", "2i3sg",
        "3'none", "3'ni3sg", "3'3'"]
        }

        if attrdicts["name"] in orders:
            neworder = []
            for id in orders[attrdicts["name"]]:
                for obj in range(len(attrdicts["children"])):
                    if attrdicts["children"][obj]["id"] == id:
                        neworder.append(attrdicts["children"].pop(obj))
                        break
            neworder += attrdicts["children"]
            attrdicts["children"] = neworder

        return attrdicts
       