import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMediumBrightnessBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      d="M13.121 2.609a1.76 1.76 0 0 0-1.219 0c-.209.077-.383.2-.551.345a11 11 0 0 0-.561.539l-.849.848c-.215.215-.272.268-.33.306a.8.8 0 0 1-.247.102c-.069.015-.146.018-.45.018h-1.2c-.308 0-.566 0-.778.016a1.8 1.8 0 0 0-.634.146 1.76 1.76 0 0 0-.862.861c-.093.203-.13.413-.146.634-.016.212-.016.47-.016.778v1.2c0 .304-.002.382-.017.45a.8.8 0 0 1-.103.247c-.037.06-.09.116-.306.331l-.847.848c-.218.217-.4.4-.54.561a1.8 1.8 0 0 0-.344.552 1.76 1.76 0 0 0 0 1.218c.077.21.2.384.345.552.138.16.321.344.539.561l.847.848c.216.215.269.272.306.33a.8.8 0 0 1 .103.248c.015.068.017.146.017.45v1.2c0 .307 0 .566.016.778.017.22.053.431.146.634.175.38.481.686.862.861a1.8 1.8 0 0 0 .634.146c.212.016.47.016.778.016h1.2c.304 0 .381.003.45.018q.132.03.247.102c.058.038.115.09.33.306l.849.848c.217.218.4.4.56.539.169.145.343.268.552.345a1.76 1.76 0 0 0 1.22 0c.208-.077.383-.2.55-.345.162-.139.344-.321.562-.539l.848-.848c.215-.215.272-.268.33-.306a.8.8 0 0 1 .248-.102c.068-.015.146-.018.45-.018h1.2c.307 0 .565 0 .777-.016a1.8 1.8 0 0 0 .634-.146 1.76 1.76 0 0 0 .862-.861 1.8 1.8 0 0 0 .146-.634c.016-.212.016-.47.016-.778v-1.2c0-.304.002-.381.017-.45a.8.8 0 0 1 .103-.247c.037-.058.09-.115.305-.33l.849-.849c.217-.217.4-.4.539-.561a1.8 1.8 0 0 0 .345-.552 1.76 1.76 0 0 0 0-1.218 1.8 1.8 0 0 0-.345-.552 11 11 0 0 0-.54-.561l-.848-.849c-.215-.215-.268-.272-.305-.33a.8.8 0 0 1-.103-.247c-.015-.069-.017-.146-.017-.45v-1.2c0-.307 0-.566-.016-.778a1.8 1.8 0 0 0-.146-.634 1.76 1.76 0 0 0-.862-.861 1.8 1.8 0 0 0-.634-.146c-.212-.016-.47-.016-.778-.016H16.11c-.304 0-.382-.003-.45-.018a.8.8 0 0 1-.247-.102c-.06-.038-.116-.09-.331-.306l-.848-.848c-.218-.218-.4-.4-.561-.539a1.8 1.8 0 0 0-.552-.345"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M12.51 8a.5.5 0 0 0-.5.5v7.002a.5.5 0 0 0 .5.5 4.001 4.001 0 0 0 0-8.002"
    />
  </Svg>
);
export default IconlystMediumBrightnessBulk;