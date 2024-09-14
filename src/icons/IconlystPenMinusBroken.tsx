import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPenMinusBroken = ({
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
      d="m17.312 11.627-.997 6.023a.83.83 0 0 1-.828.693c-1.478-.044-4.959-.033-7.573.69a.81.81 0 0 1-.795-.214.81.81 0 0 1-.218-.8c.728-2.608.732-6.095.693-7.568a.82.82 0 0 1 .69-.834l6.022-.996"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.415 5.308a1.268 1.268 0 0 0-2.006.284l-.578 1.044a1.484 1.484 0 0 0 .25 1.766l3.454 3.454a1.48 1.48 0 0 0 1.765.249l1.045-.578a1.267 1.267 0 0 0 .283-2.005L18.52 7.415M6.685 5.83H3M11.202 14.734l-4.089 4.089M13.04 12.897a1.299 1.299 0 1 0 0 1.838"
    />
  </Svg>
);
export default IconlystPenMinusBroken;
