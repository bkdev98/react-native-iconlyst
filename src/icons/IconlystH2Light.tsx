import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystH2Light = ({
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
      d="M3.5 5.734V18.44m8.47-12.706V18.44M3.5 12.087h8.47M16.958 12.24a2.272 2.272 0 0 1 4.542 0c0 .667-.175 1.133-.45 1.602-.56.96-1.554 1.89-2.307 2.693L16.96 18.44h4.54"
    />
  </Svg>
);
export default IconlystH2Light;
