import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystForwardCircleBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.602 15.22s1.738-1.14 2.453-1.986a1.88 1.88 0 0 0 0-2.47c-.677-.79-2.453-1.987-2.453-1.987M9.81 9.19a9.3 9.3 0 0 1 2.736 1.733c.696.646.68 1.53 0 2.153a9.1 9.1 0 0 1-2.735 1.733c-.798.338-1.614-.05-1.732-.962a17.4 17.4 0 0 1 0-3.692c.109-.878.848-1.317 1.732-.965"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.25 21a9 9 0 1 1 3.399-.664"
    />
  </Svg>
);
export default IconlystForwardCircleBroken;
