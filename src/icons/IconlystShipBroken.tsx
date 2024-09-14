import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShipBroken = ({
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
      d="m21.054 13.998.393-1.926a.315.315 0 0 0-.199-.359 25 25 0 0 0-9.324-1.573M5.135 19.826l-1.58-7.754a.315.315 0 0 1 .198-.358 25 25 0 0 1 5.517-1.371M19.876 19.776l.71-3.478"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.341 10.63V7.056c0-.155.101-.291.25-.336a17 17 0 0 1 9.81 0c.148.045.25.181.25.336v3.574M12.501 19.796v-6.527M10.007 5.971V4.005c0-.111.073-.21.18-.242q.506-.152 1.024-.237M14.984 5.972V4.006a.254.254 0 0 0-.18-.243 8 8 0 0 0-1.189-.261M19.879 19.785v-.01m-16.13.765c.494-.358.923-.765 1.897-.765 1.74 0 1.742 1.298 3.482 1.298 1.739 0 1.741-1.298 3.481-1.298 1.741 0 1.741 1.298 3.482 1.298s1.742-1.298 3.484-1.298c.827 0 1.26.292 1.675.598"
    />
  </Svg>
);
export default IconlystShipBroken;
