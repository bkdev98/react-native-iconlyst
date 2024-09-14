import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTelcoinLight = ({
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
      d="m20.79 10.531-1.448 6.522a2.48 2.48 0 0 1-1.674 1.826l-6.373 2.007a2.48 2.48 0 0 1-2.42-.538l-4.923-4.516a2.48 2.48 0 0 1-.745-2.363l1.45-6.522c.192-.865.83-1.56 1.675-1.826l6.373-2.007a2.48 2.48 0 0 1 2.418.537l4.925 4.517c.652.598.936 1.5.743 2.363"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.007 15.814h-.831a1.638 1.638 0 0 1-1.607-1.956l1.07-5.747c-.364 1.253-.956 1.63-2.118 2.08h4.512"
    />
  </Svg>
);
export default IconlystTelcoinLight;
