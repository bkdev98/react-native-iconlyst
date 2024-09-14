import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLineChartUpwardOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M4.5 3.37a.75.75 0 0 1 .75.75v14c0 .69.56 1.25 1.25 1.25h14a.75.75 0 0 1 0 1.5h-14a2.75 2.75 0 0 1-2.75-2.75v-14a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.45 7.834a.75.75 0 0 1 .374.992l-.683-.309.683.309v.002l-.002.003-.005.01-.017.037-.061.127a11.677 11.677 0 0 1-1.082 1.773c-.362.485-.816 1-1.347 1.398-.53.397-1.188.716-1.938.716-1.322 0-2.283-.825-2.974-1.42l-.006-.005-.066-.056c-.347-.298-.63-.542-.917-.72-.292-.183-.527-.257-.75-.25-.756.021-1.48.587-2.084 1.337a7.8 7.8 0 0 0-.885 1.39l-.01.02v.002a.75.75 0 0 1-1.364-.626l.682.313-.682-.314.001-.002.002-.003.005-.01.015-.033.057-.113a9.291 9.291 0 0 1 1.011-1.564c.665-.828 1.76-1.855 3.21-1.897.62-.017 1.146.203 1.585.476.39.243.758.56 1.081.839l.086.073c.749.643 1.31 1.063 2.003 1.063.315 0 .662-.134 1.038-.416.375-.282.73-.674 1.044-1.095a10 10 0 0 0 .99-1.643l.011-.025.002-.005a.75.75 0 0 1 .993-.374"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLineChartUpwardOutline;
