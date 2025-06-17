 

export const COLORS = {
    primary: "#7F5DF0",     // Light purple
    secondary: "#5D2DFD",   // Dark purple

    white: "#fff",
    black: "#000000",
    green: "#37E39F",
    red: "#F9A8BA",
    softRed: "#ec644b",
    gray: "#6A6A6A",
    lightGray: "#dbdbdb",
    lightGray1: "#f5f6fa",
    softDark:"#333333",
    softDark1:"#545454"
};
export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,

    // font sizes
    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,
    body1: 30,
    body2: 22,
    body3: 16,
    body4: 14,
    body5: 12,

    // app dimensions
    width:10,
    height:10
};
export const FONTS = {
    h1: { fontSize: SIZES.h1, lineHeight: 36 },
    h2: {  fontSize: SIZES.h2, lineHeight: 30 },
    h3: { fontSize: SIZES.h3, lineHeight: 22 },
    h4: {  fontSize: SIZES.h4, lineHeight: 22 },
    body1: {  fontSize: SIZES.body1, lineHeight: 36 },
    body2: {  fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontSize: SIZES.body4, lineHeight: 22 },
    body5: { fontSize: SIZES.body5, lineHeight: 22 },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;


export const theme = {
	colors: {
		primary: '#003153',
		white: '#fff',
		black: '#000',
		searchIcon: '#999',
		searchText: '#444',
		searchBackground: '#f0f0f0',
		title: "#000",
		subTitle: '#555',
		storyBorder: '#00f',
		description: '#9f9f9f',
		inputBackground: '#f0f0f0',
		inputText: '#000',
		messageBackground: '#1B5583',
		danger: '#df4759',
		success: "#4b0",
		light: '#ccc',
		halfOpacitySecondary: 'rgba(240, 149, 17, 0.5)',
		halfOpacityPrimary: 'rgba(0, 132, 255, 0.5)',
	 
	},
	fontSize: {
		title: 18,
		subTitle: 13,
		message: 15
	}
};

export const colors = {
    primary: '#070f18',
    gray: '#8b8989',
    lightGray: '#b2b2b2',
    light: '#fbfbfb',
    white: '#fff',
    black: '#000',
  };
  
  export const shadow = {
    light: {
      shadowColor: colors.black,
      shadowRadius: 4,
      shadowOpacity: 0.2,
      shadowOffset: {
        width: 0,
        height: 2,
      },
    },
    dark: {
      shadowColor: colors.black,
      shadowRadius: 4,
      shadowOpacity: 0.3,
      shadowOffset: {
        width: 0,
        height: 2,
      },
    },
  };
  
  export const sizes = {
    width:10,
    height:10,
    title: 32,
    h2: 24,
    h3: 18,
    body: 14,
    caption: 12,
    radius: 16,
  };
  
  export const spacing = {
    s: 8,
    m: 18,
    l: 24,
    xl: 40,
  };
  