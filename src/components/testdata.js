export const newTemplate =
  '<h2>Header</h2> <p><strong>Note:</strong> <br />These Templates are combined with nonEditable plugin using regex.</p> <p><strong>Test:</strong><br />Attempt to add Field1 template to the empty cell below.<br />To get focus, you need to click the area of the cell that is horizontally after<br />the longest template text length (ie the last 1/5th of the cell since Field3HasAReallyLongName ends there)<br /><br />Also try add a Field 5 column header in the cell below (Field 4). It brings focus to the left table.<br />If you click above and below the font lineheight of the cell (the top 1/10th and lower 1/10th of the cell then it brings focus to it)</p> <table style="width: 42.1204%; border-collapse: collapse; float: left; height: 107px;" border="1"> <tbody> <tr style="height: 18px;"> <td style="width: 18.6529%; height: 18px;"><strong>Field 1</strong></td> <td style="width: 18.8284%; height: 18px;">&nbsp;</td> </tr> <tr style="height: 18px;"> <td style="width: 18.6529%; height: 18px;"><strong>Field 2</strong></td> <td style="width: 18.8284%; height: 18px;">{{Field2MediumName}}</td> </tr> <tr style="height: 18px;"> <td style="width: 18.6529%; height: 18px;"><strong>Field 3</strong></td> <td style="width: 18.8284%; height: 18px;">{{Field3HasAReallyLongName}}</td> </tr> </tbody> </table> <table style="border-collapse: collapse; width: 43.3492%; height: 42px; float: right;" border="1"> <tbody> <tr style="height: 21px;"> <td style="width: 38.947%; height: 21px;"><strong>Field 4</strong></td> <td style="width: 58.3302%; height: 21px;">{{Field4}}</td> </tr> <tr style="height: 21px;"> <td style="width: 38.947%; height: 21px;">&nbsp;</td> <td style="width: 58.3302%; height: 21px;">(click the cell to the left of me)</td> </tr> </tbody> </table> <p>&nbsp;</p> <p>&nbsp;</p> <p>&nbsp;</p> <p>&nbsp;</p> <p>&nbsp;</p> <p>&nbsp;</p>';

const field1 = {
  title: "Field 1",
  description: "This data is for Field 1",
  content: "{{Field1}}"
};

const field2 = {
  title: "Field 2",
  description: "This data is for Field 2",
  content: "{{Field2MediumName}}"
};

const field3 = {
  title: "Field 3",
  description: "This data is for Field 3",
  content: "{{Field3HasAReallyLongName}}"
};

const field4 = {
  title: "Field 4",
  description: "This data is for Field 4",
  content: "{{Field4}}"
};

export const fields = [field1, field2, field3, field4];
