import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAntenaBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M20.05 2.683a2.31 2.31 0 0 0-2.562.514L3.193 17.487a2.32 2.32 0 0 0-.509 2.564A2.31 2.31 0 0 0 4.855 21.5h2.157a.2.2 0 0 0 .2-.2v-3.862a.75.75 0 0 1 1.5 0V21.3c0 .11.09.2.2.2h2.522a.2.2 0 0 0 .2-.2v-7.578a.75.75 0 0 1 1.5 0V21.3c0 .11.09.2.2.2h5.816a2.35 2.35 0 0 0 2.351-2.349V4.85c0-.967-.556-1.797-1.452-2.167"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAntenaBold;
