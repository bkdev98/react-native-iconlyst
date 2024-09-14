import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchVirusBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      d="M10.635 8.71a.457.457 0 0 1 .83 0q-.075-.004-.15-.004h-.531q-.075 0-.15.004M10.18 10.394a1 1 0 0 0 .103-.063c.15-.08.32-.125.5-.125h.531c.184 0 .356.046.506.128q.045.032.093.057a1.07 1.07 0 0 1 .465.898v1.183l-.001.06a1 1 0 0 0-.01.096 1.064 1.064 0 0 1-1.053.908h-.53c-.53 0-.968-.386-1.05-.892a1 1 0 0 0-.013-.128l-.001-.044v-1.201a1.06 1.06 0 0 1 .46-.877"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.628 11.08a8.42 8.42 0 1 1 16.841 0 8.42 8.42 0 0 1-16.84 0m11.25.9v.166l.122.047a2.15 2.15 0 0 1 1.322 1.624l.001.008.085.52a.75.75 0 0 1-1.48.242l-.084-.514a.64.64 0 0 0-.26-.409 2.56 2.56 0 0 1-2.27 1.372h-.53a2.56 2.56 0 0 1-2.272-1.373.62.62 0 0 0-.255.405l-.001.008-.091.519a.75.75 0 1 1-1.478-.259l.09-.515a2.13 2.13 0 0 1 1.317-1.627l.01-.004.116-.045v-.166a2.5 2.5 0 0 0-1.006.176.75.75 0 0 1-.56-1.392c.481-.193.93-.264 1.338-.28a2.14 2.14 0 0 1-1.217-1.586l-.088-.518a.75.75 0 0 1 1.478-.253l.09.52a.64.64 0 0 0 .392.486l.446.174v-.404a1.957 1.957 0 1 1 3.914 0v.403l.443-.173a.64.64 0 0 0 .393-.486v-.001l.09-.52a.75.75 0 1 1 1.478.254l-.09.518a2.14 2.14 0 0 1-1.216 1.586c.408.016.857.087 1.337.28a.75.75 0 1 1-.56 1.392 2.5 2.5 0 0 0-1.004-.176M20.908 19.958l-1.984-1.98a1.001 1.001 0 0 0-1.412 1.417l1.984 1.979a1 1 0 1 0 1.412-1.416"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchVirusBold;
