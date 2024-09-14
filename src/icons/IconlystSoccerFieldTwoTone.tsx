import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSoccerFieldTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.7 5h12.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874c.218.428.218.988.218 2.108v7.6c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874C19.98 19 19.42 19 18.3 19H5.7c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C2.5 17.48 2.5 16.92 2.5 15.8V8.2c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C4.02 5 4.58 5 5.7 5M12 5v14"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6M21.5 9h-1.39c-.57 0-.854 0-1.071.113a1 1 0 0 0-.426.426c-.113.217-.113.502-.113 1.071v2.78c0 .57 0 .854.113 1.071a1 1 0 0 0 .426.426c.217.113.502.113 1.071.113h1.39M2.5 9h1.39c.57 0 .854 0 1.071.113a1 1 0 0 1 .426.426c.113.217.113.502.113 1.071v2.78c0 .57 0 .854-.113 1.071a1 1 0 0 1-.426.426C4.744 15 4.459 15 3.89 15H2.5"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystSoccerFieldTwoTone;
