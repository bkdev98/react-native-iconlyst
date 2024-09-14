import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPasswordTickBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.25 10.28V8.096c0-2.878-1.793-4.911-4.673-4.911h-8.24c-2.872 0-4.673 2.033-4.673 4.91v3.962c0 2.878 1.792 4.91 4.673 4.91h2.027M17.836 13.156a3.83 3.83 0 1 1-2.676 1.09"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.538 16.133 17.41 18.26l-1.276-1.276M12.457 10.036v-.064m-.26.05a.261.261 0 0 1 .522 0 .26.26 0 0 1-.522 0M16.36 10.036v-.064m-.258.05a.261.261 0 1 1 .522 0 .261.261 0 0 1-.522 0M8.55 10.036v-.064m-.259.05a.261.261 0 0 1 .522 0 .26.26 0 0 1-.261.26.26.26 0 0 1-.261-.26"
    />
  </Svg>
);
export default IconlystPasswordTickBroken;
