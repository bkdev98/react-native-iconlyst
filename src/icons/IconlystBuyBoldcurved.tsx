import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBuyBoldcurved = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.214 6.385c1.32.6 2.15 1.85 2.35 3.52.08.63.06 1.3-.03 1.97-.28 2.01-1.25 4.02-2.54 5.03-.98.76-2.23 1.13-3.5 1.3-.77.11-1.55.14-2.28.14-.26 0-.52 0-.77-.01-1.84-.05-4.18-.26-5.87-1.46-2.27-1.61-2.01-5.03-1.78-8.059v-.001l.009-.114c.077-.989.15-1.929.121-2.766.04-1.25-1.26-1.5-1.41-1.52a.76.76 0 0 1-.62-.86c.07-.4.45-.67.85-.62.94.14 2.69.94 2.68 2.94l.002.15a.353.353 0 0 0 .367.344c1.927-.088 3.844-.176 5.771-.244a174 174 0 0 1 3.76-.1l.037-.002c.9-.03 1.906-.063 2.853.362m-6.08 5.04h2.77a.749.749 0 1 0 0-1.5h-2.77c-.41 0-.75.34-.75.75s.34.75.75.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M7.398 19.552a1.296 1.296 0 0 0 0 2.589 1.296 1.296 0 0 0 0-2.59M17.729 19.552a1.295 1.295 0 1 0 .001 2.59 1.295 1.295 0 0 0-.001-2.59"
    />
  </Svg>
);
export default IconlystBuyBoldcurved;
