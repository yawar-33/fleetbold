export function concatenateParagraphs(content: any, maxLength: number = 500): string {
    let concatenatedText: string = '';
  
    if (content && content.document && content.document.length > 0) {
      content.document.forEach((item: any) => {
        if (item.type === 'paragraph' && item.children && item.children.length > 0) {
          item.children.forEach((child: any) => {
            if (child.text) {
              concatenatedText += child.text;
            }
          });
        }
      });
    }
  
    // Truncate the concatenated text if it exceeds maxLength
    if (concatenatedText.length > maxLength) {
      concatenatedText = concatenatedText.substring(0, maxLength);
    }
  
    return concatenatedText;
  }