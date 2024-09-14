import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchAnimalLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.05 11.718a8.418 8.418 0 1 0-16.836.001 8.418 8.418 0 0 0 16.836 0M17.36 17.883l3.424 3.416"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.63 8.22V8.17m-.006-.153a.225.225 0 1 0 .003.45.225.225 0 0 0-.003-.45M14.895 9.878v-.051m-.006-.153a.225.225 0 1 0 .003.45.225.225 0 0 0-.003-.45M8.38 9.878v-.051m-.006-.153a.225.225 0 1 0 .003.45.225.225 0 0 0-.003-.45"
    />
    <Path
      stroke={props.color}
      strokeWidth={1.5}
      d="M11.662 15.017c1.368 0 3.103 1.185 3.078-.639-.01-1.368-1.435-2.652-3.078-2.653-1.652 0-3.293 1.395-3.065 2.817.252 1.65 1.853.475 3.065.475Z"
    />
  </Svg>
);
export default IconlystSearchAnimalLight;
