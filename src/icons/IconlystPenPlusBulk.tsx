import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPenPlusBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M13.066 14.782a.66.66 0 0 0 0-.923.654.654 0 0 0-.923 0 .65.65 0 0 0 0 .923c.25.25.666.257.923 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m17.312 13.331-3.725-3.725a3.4 3.4 0 0 1-.33-.422 4 4 0 0 1-.123-.213.33.33 0 0 0-.341-.182l-4.263.705a1.32 1.32 0 0 0-1.101 1.338c.033 1.431.046 5.044-.712 7.741q-.016.062-.027.124c-.04.23.23.317.396.152l3.51-3.51a.33.33 0 0 0 .07-.343 2.05 2.05 0 0 1 .488-2.126 2.057 2.057 0 0 1 2.9 0 2.051 2.051 0 0 1-2.126 3.388.33.33 0 0 0-.343.07l-3.431 3.431-.064.064c-.167.167-.076.439.156.396q.052-.009.106-.024c2.828-.785 6.639-.732 7.747-.693a1.33 1.33 0 0 0 1.325-1.114l.7-4.27a.32.32 0 0 0-.168-.328 4 4 0 0 1-.222-.129 3.4 3.4 0 0 1-.422-.33M7.881 6.367a.75.75 0 0 0-.75-.75H6.038V4.526a.75.75 0 0 0-1.5 0v1.09H3.446a.75.75 0 0 0 0 1.5h1.092v1.096a.75.75 0 0 0 1.5 0V7.117h1.093a.75.75 0 0 0 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m21.782 9.52-4.384-4.383a1.75 1.75 0 0 0-1.51-.495 1.74 1.74 0 0 0-1.312.903l-.607 1.082a2.03 2.03 0 0 0 .026 1.965c.086.15.192.296.317.42l3.593 3.595.007.006c.125.126.27.23.415.31a1.99 1.99 0 0 0 1.965.026l1.088-.6c.501-.276.831-.751.903-1.312a1.75 1.75 0 0 0-.5-1.516"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystPenPlusBulk;
