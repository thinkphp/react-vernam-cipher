Here’s a `README.md` for your React Vernam Cipher component:

```markdown
# Vernam Cipher React Component

This is a React-based implementation of the Vernam Cipher, a symmetric key cipher used for encryption and decryption of text. The component allows users to input text, generate a key, encrypt the text using the Vernam Cipher, and decrypt it back using the same key.

## Features
- Input text to encrypt
- Generate a random key for encryption
- Encrypt text using the Vernam Cipher
- Decrypt encrypted text using the same key
- Displays the generated key in hexadecimal format
- Responsive UI for better user interaction

## Requirements

- React (v17 or higher)
- Basic understanding of the Vernam Cipher

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/vernam-cipher-react.git
   ```

2. Navigate into the project directory:
   ```bash
   cd vernam-cipher-react
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

   Visit `http://localhost:3000` in your browser to see the component in action.

## Usage

1. **Enter Text**: Type the text you want to encrypt into the "Enter Text" field.
2. **Generate Key**: Click the "Generate Key" button to generate a random key for encryption. The key is displayed in hexadecimal format.
3. **Encrypt**: Click the "Encrypt" button to encrypt the entered text using the generated key. The encrypted output will be displayed in hexadecimal.
4. **Decrypt**: If you have encrypted text, click the "Decrypt" button to decrypt the text back to its original form.

## Example Workflow

1. Enter a text, e.g., "Hello World".
2. Click "Generate Key" to generate a random key.
3. Click "Encrypt" to encrypt the text.
4. Click "Decrypt" to decrypt the text back to "Hello World".

## Styling

The component uses a simple, clean layout that you can customize in the accompanying `VernamCipher.css` file.

## Component Structure

- `inputText`: Holds the user input text to be encrypted.
- `key`: Holds the random key used for encryption and decryption.
- `keyDisplay`: Displays the key in hexadecimal format.
- `outputText`: Displays the output text (either encrypted or decrypted).
- `encryptedText`: Stores the encrypted text for decryption.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

- **Adrian Statescu**

Feel free to open issues or submit pull requests for any improvements or suggestions.
```
