import {StyleSheet} from 'react-native';

const style = StyleSheet.create(
{
	white_txt:
	{
		color: '#FFF'
	},
	main_container:
	{
		flex: 1,
		backgroundColor: '#2A9D8F',
		padding: 50
	},
	cocktail_container:
	{
		borderWidth: 3,
		borderColor: '#EFD777'
	},
	cocktail_content:
	{
		padding: 20
	},
	cocktail_name:
	{
		fontWeight: 'bold',
		alignSelf: 'center'
	},
	cocktail_detail1:
	{
		marginBottom: 20
	},
	cocktail_detail2:
	{
		marginTop: 20,
		textAlign: 'justify'
	},
	btn:
	{
		marginBottom: 30,
		padding: 10,
		backgroundColor: '#E5778E',
		borderRadius: 15,
		alignItems: 'center'
	},
	btn_txt:
	{
		textTransform: 'uppercase',
		fontWeight: 'bold'
	},
	img:
	{
		height: 170,
		width: 170,
		marginBottom: 20,
		alignSelf: 'center',
		borderRadius: 5
	}
});

export default style;

