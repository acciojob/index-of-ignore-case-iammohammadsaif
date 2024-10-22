<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Index Of Ignore Case</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f8ff;
            margin: 0;
            padding: 20px;
        }

        h1 {
            color: #333;
        }

        label {
            font-weight: bold;
            margin-right: 10px;
        }

        input[type="text"] {
            padding: 10px;
            width: 300px;
            border: 1px solid #ccc;
            border-radius: 4px;
            margin-bottom: 10px;
        }

        button {
            background-color: #4CAF50;
            color: white;
            padding: 10px 15px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }

        button:hover {
            background-color: #45a049;
        }

        #result {
            margin-top: 20px;
            font-size: 1.2em;
            font-weight: bold;
            color: #333;
        }

        .container {
            max-width: 400px;
            margin: auto;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
    </style>
    <script>
        // JavaScript function to find the index of a substring (case-insensitive)
        function indexOfIgnoreCase(str, subStr) {
            // Convert both strings to lowercase for case-insensitive comparison
            let lowerStr = str.toLowerCase();
            let lowerSubStr = subStr.toLowerCase();

            // Use indexOf to find the first occurrence of the substring
            return lowerStr.indexOf(lowerSubStr);
        }

        // Function to get user input and display result
        function findIndex() {
            // Get values from input fields
            let str = document.getElementById('str').value;
            let subStr = document.getElementById('subStr').value;

            // Call the indexOfIgnoreCase function and get the result
            let result = indexOfIgnoreCase(str, subStr);

            // Display the result in the result div
            document.getElementById('result').innerText = 'Index: ' + result;
        }
    </script>
</head>
<body>
    <div class="container">
        <h1>Index Of Ignore Case</h1>

        <!-- Input fields for string and substring -->
        <label for="str">Main String: </label>
        <input type="text" id="str" placeholder="Enter main string" required><br>

        <label for="subStr">Substring: </label>
        <input type="text" id="subStr" placeholder="Enter substring" required><br>

        <!-- Button to trigger the function -->
        <button onclick="findIndex()">Find Index</button>

        <!-- Div to display the result -->
        <div id="result"></div>
    </div>
</body>
</html>
