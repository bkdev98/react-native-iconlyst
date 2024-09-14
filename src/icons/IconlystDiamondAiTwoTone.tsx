import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDiamondAiTwoTone = ({
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
      d="m19.77 9.186-4.958-4.958C13.084 2.5 10.777 2.64 9.045 4.37L4.374 9.043c-1.732 1.732-1.877 4.033-.144 5.766l4.958 4.958c1.734 1.734 4.036 1.59 5.767-.142l4.672-4.672c1.732-1.732 1.876-4.034.143-5.767"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.799 13.861-.095-.257a3.54 3.54 0 0 0-2.09-2.093l-.257-.095.256-.095a3.54 3.54 0 0 0 2.09-2.093L9.8 8.97l.095.258a3.54 3.54 0 0 0 2.09 2.093l.257.095-.257.095a3.54 3.54 0 0 0-2.09 2.093zM14.795 15.03a1.66 1.66 0 0 0-1.107-1.109c.53-.162.945-.577 1.106-1.109.162.532.577.947 1.108 1.11-.53.16-.946.576-1.107 1.108"
    />
  </Svg>
);
export default IconlystDiamondAiTwoTone;
