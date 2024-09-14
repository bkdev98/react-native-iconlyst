import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystIncognitoBold = ({
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
      fillRule="evenodd"
      d="M16.712 13.718c-1.514 0-2.794.97-3.28 2.317a.335.335 0 0 1-.375.217 5.7 5.7 0 0 0-2.11.01.33.33 0 0 1-.372-.218 3.49 3.49 0 0 0-3.285-2.326 3.505 3.505 0 0 0 0 7.01 3.505 3.505 0 0 0 3.402-2.7.31.31 0 0 1 .216-.23c.763-.196 1.487-.2 2.192-.007.107.03.184.12.209.228a3.504 3.504 0 0 0 3.403 2.709 3.505 3.505 0 0 0 0-7.01M21.119 10.277a51 51 0 0 0-1.521-.216.3.3 0 0 1-.25-.218l-1.215-4.42a2.05 2.05 0 0 0-1.069-1.29 2.05 2.05 0 0 0-1.674-.06l-2.919 1.17a1.04 1.04 0 0 1-.785 0L8.772 4.076a2.04 2.04 0 0 0-1.677.058 2.05 2.05 0 0 0-1.07 1.292L4.821 9.813a.3.3 0 0 1-.25.218c-.566.075-1.13.153-1.692.245a.75.75 0 1 0 .243 1.48c5.82-.957 11.794-.956 17.76 0a.75.75 0 0 0 .237-1.48"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystIncognitoBold;
