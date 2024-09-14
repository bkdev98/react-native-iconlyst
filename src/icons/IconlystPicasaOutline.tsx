import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPicasaOutline = ({
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
      d="M7.968 10.248a.75.75 0 0 1 .946.48l3.26 10.02a.75.75 0 0 1-1.427.465l-3.26-10.02a.75.75 0 0 1 .481-.945M17.951 4.337a.75.75 0 0 1 .482.945l-3.37 10.38a.75.75 0 1 1-1.427-.463l3.37-10.38a.75.75 0 0 1 .945-.482"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.834 6.166A8.25 8.25 0 1 0 6.166 17.833 8.25 8.25 0 0 0 17.834 6.167m1.06-1.06c3.808 3.807 3.808 9.98 0 13.788s-9.98 3.808-13.788 0-3.808-9.98 0-13.788 9.98-3.808 13.788 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.9 15.43a.75.75 0 0 1 .75-.75h10.67a.75.75 0 0 1 0 1.5H9.65a.75.75 0 0 1-.75-.75M12.607 7.759a.75.75 0 0 1-.167 1.047l-8.65 6.28a.75.75 0 0 1-.881-1.214l8.65-6.28a.75.75 0 0 1 1.048.167"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.363 4.098a.75.75 0 0 1 1.048-.165l8.83 6.42a.75.75 0 1 1-.882 1.213l-8.83-6.42a.75.75 0 0 1-.166-1.048"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPicasaOutline;
