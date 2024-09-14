import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPenMinusBulk = ({
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
      d="M13.046 14.36a.66.66 0 0 0 0-.923.655.655 0 0 0-.923 0 .65.65 0 0 0 0 .923c.251.25.666.257.923 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m17.292 12.91-3.725-3.726a3.4 3.4 0 0 1-.33-.422 4 4 0 0 1-.122-.214.33.33 0 0 0-.342-.181l-4.263.705a1.32 1.32 0 0 0-1.1 1.338c.032 1.431.045 5.044-.713 7.74q-.016.063-.027.126c-.039.23.231.317.396.152l.073-.073 3.438-3.438a.33.33 0 0 0 .07-.343 2.05 2.05 0 0 1 .487-2.127 2.06 2.06 0 0 1 2.901.001 2.056 2.056 0 0 1 0 2.9 2.05 2.05 0 0 1-2.126.488.33.33 0 0 0-.343.07l-3.432 3.431-.064.064c-.166.167-.076.439.156.396q.054-.009.106-.024c2.828-.785 6.64-.732 7.747-.693a1.33 1.33 0 0 0 1.325-1.114l.702-4.27a.32.32 0 0 0-.169-.329 4 4 0 0 1-.223-.128 3.4 3.4 0 0 1-.422-.33M7.9 5.738a.75.75 0 0 0-.75-.75H3.467a.75.75 0 0 0 0 1.5H7.15a.75.75 0 0 0 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m21.763 9.098-4.384-4.385a1.75 1.75 0 0 0-1.51-.494 1.74 1.74 0 0 0-1.312.903l-.607 1.081a2.03 2.03 0 0 0 .026 1.965c.086.152.191.297.316.422l3.6 3.6c.125.125.27.231.416.31a1.99 1.99 0 0 0 1.965.026l1.087-.599c.502-.277.832-.752.904-1.313a1.75 1.75 0 0 0-.501-1.516"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystPenMinusBulk;
