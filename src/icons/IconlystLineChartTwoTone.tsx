import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLineChartTwoTone = ({
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
      d="m4.768 15.402 4.884 1.77 2.712-2.96 3.888.6 2.817-5.335M4.5 10.411h3.596l2.63-3.055 4.172 2.301 4.171-4.734"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.5 20.12h-14a2 2 0 0 1-2-2v-14"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.721 7.54v-.107m0-.4a.466.466 0 1 0 .006.929.466.466 0 0 0-.006-.928M14.997 9.518V9.41m0-.4a.466.466 0 1 0 .006.929.466.466 0 0 0-.006-.929M8.139 10.24v-.107m0-.4a.466.466 0 1 0 .006.929.466.466 0 0 0-.006-.929M9.583 17.213v-.106m0-.4a.466.466 0 1 0 .006.929.466.466 0 0 0-.006-.929M12.382 14.242v-.107m0-.4a.466.466 0 1 0 .005.929.466.466 0 0 0-.005-.928M16.214 14.707V14.6m0-.4a.466.466 0 1 0 .005.929.466.466 0 0 0-.005-.928"
    />
  </Svg>
);
export default IconlystLineChartTwoTone;
