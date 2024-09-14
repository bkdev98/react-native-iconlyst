import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSquareTouchIdCheckBold = ({
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
      d="M8.653 10.057a.75.75 0 0 1-1.303-.744 5.35 5.35 0 0 1 4.635-2.698c.705 0 1.397.141 2.056.42a.75.75 0 1 1-.584 1.38c-1.759-.74-3.87.003-4.804 1.642m1.49 3.958a.75.75 0 0 1 .75.75v1.62a.75.75 0 0 1-1.5 0v-1.62a.75.75 0 0 1 .75-.75m-1.988 1.33a.75.75 0 1 1-1.5 0v-2.84a.75.75 0 0 1 1.5 0zm3.79-5.79a2.56 2.56 0 0 1 2.553 2.56v2.679c0 .259.31.401.52.25q.306-.222.636-.408a.31.31 0 0 0 .16-.267v-2.424c0-.793-.243-1.557-.7-2.209a.751.751 0 0 1 1.228-.862c.635.907.971 1.968.971 3.071v1.66c0 .194.183.337.374.3.394-.074.8-.117 1.215-.117.757 0 1.483.126 2.16.358.203.07.422-.076.422-.29v-5.95c0-3.308-2.123-5.531-5.283-5.531H7.766c-3.16 0-5.282 2.223-5.282 5.531v7.939c0 3.308 2.122 5.53 5.282 5.53h4.199a.31.31 0 0 0 .303-.342 6 6 0 0 1-.03-.581 6.6 6.6 0 0 1 .882-3.301c.072-.126.044-.283-.028-.41a.7.7 0 0 1-.094-.356v-4.27c0-.584-.473-1.06-1.054-1.06-.58 0-1.052.476-1.052 1.06v.48a.75.75 0 0 1-1.5 0v-.48a2.56 2.56 0 0 1 2.552-2.56"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.297 16.356a.75.75 0 0 0-1.061 0l-3.25 3.246a.3.3 0 0 1-.425 0l-.855-.855a.749.749 0 1 0-1.061 1.058l1.596 1.6a.75.75 0 0 0 1.061.002l3.995-3.99a.75.75 0 0 0 0-1.062"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSquareTouchIdCheckBold;
