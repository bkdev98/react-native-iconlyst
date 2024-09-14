import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPenMinusBold = ({
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
      d="M12.546 14.868a.66.66 0 0 0 0-.923.655.655 0 0 0-.923 0 .65.65 0 0 0 0 .923c.251.25.666.257.923 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m16.792 13.417-3.725-3.725a3.4 3.4 0 0 1-.33-.422 4 4 0 0 1-.122-.213.33.33 0 0 0-.342-.182L8.01 9.58a1.32 1.32 0 0 0-1.1 1.338c.032 1.431.045 5.044-.713 7.74q-.016.063-.027.126c-.039.23.231.317.396.152l.073-.073 3.438-3.438a.33.33 0 0 0 .07-.343 2.05 2.05 0 0 1 .487-2.127 2.06 2.06 0 0 1 2.901.001 2.056 2.056 0 0 1 0 2.9 2.05 2.05 0 0 1-2.126.488.33.33 0 0 0-.343.07l-3.432 3.431-.064.065c-.166.167-.076.438.156.395q.054-.009.106-.024c2.828-.785 6.64-.732 7.747-.693a1.33 1.33 0 0 0 1.325-1.114l.702-4.27a.32.32 0 0 0-.169-.328 4 4 0 0 1-.223-.129 3.4 3.4 0 0 1-.422-.33M21.263 9.607l-4.384-4.385a1.75 1.75 0 0 0-1.51-.494 1.74 1.74 0 0 0-1.312.903l-.607 1.08a2.03 2.03 0 0 0 .026 1.966c.086.152.192.297.317.422l3.6 3.6c.125.125.27.23.415.31a1.99 1.99 0 0 0 1.965.026l1.087-.6c.502-.276.832-.751.904-1.312a1.75 1.75 0 0 0-.501-1.516M7.4 6.246a.75.75 0 0 0-.75-.75H2.967a.75.75 0 0 0 0 1.5H6.65a.75.75 0 0 0 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPenMinusBold;
