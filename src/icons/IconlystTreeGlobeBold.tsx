import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTreeGlobeBold = ({
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
      d="M16.801 19.081a.5.5 0 0 0-.42-.23H7.622a.5.5 0 0 0-.421.23l-.043.067c-.564.88-.847 1.322-.816 1.81.028.448.251.855.612 1.119.395.288.92.288 1.964.288h6.164c1.044 0 1.568 0 1.964-.288.362-.265.584-.673.612-1.119.03-.488-.252-.93-.816-1.81zM15.458 10.761a.5.5 0 0 1-.451.283h-.87L15 12.54a.499.499 0 0 1-.433.75H12.8v1.52a.75.75 0 0 1-1.5 0v-1.52H9.38a.5.5 0 0 1-.433-.75l.864-1.496H8.94a.499.499 0 0 1-.391-.811l3.034-3.805a.516.516 0 0 1 .782 0l3.033 3.805c.12.15.143.355.06.528M12 2.865c-4.598 0-8.34 3.741-8.34 8.34 0 2.6 1.216 4.984 3.221 6.545.086.067.19.101.299.101h9.638a.5.5 0 0 0 .299-.1c2.005-1.562 3.22-3.946 3.22-6.547 0-4.598-3.74-8.339-8.337-8.339"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTreeGlobeBold;
