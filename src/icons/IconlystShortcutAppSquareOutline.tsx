import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShortcutAppSquareOutline = ({
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
      d="M3.74 3.897C4.725 2.841 6.127 2.25 7.782 2.25h8.435c1.66 0 3.062.59 4.046 1.648.978 1.05 1.487 2.5 1.487 4.128v7.948c0 1.627-.509 3.078-1.487 4.128-.985 1.057-2.387 1.648-4.047 1.648H7.782c-1.66 0-3.062-.59-4.045-1.648-.979-1.05-1.487-2.501-1.487-4.128V8.026c0-1.628.511-3.078 1.49-4.129M4.837 4.92C4.16 5.647 3.75 6.71 3.75 8.026v7.948c0 1.317.409 2.38 1.085 3.106.67.72 1.658 1.17 2.947 1.17h8.434c1.29 0 2.278-.45 2.949-1.17.676-.726 1.085-1.789 1.085-3.106V8.026c0-1.317-.409-2.38-1.085-3.106-.67-.72-1.66-1.17-2.948-1.17H7.782c-1.284 0-2.273.45-2.945 1.17"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.49 7.589 7.674 10.31a.06.06 0 0 0 0 .099l3.818 2.723a.88.88 0 0 0 1.018 0l3.818-2.722a.06.06 0 0 0 0-.099L12.51 7.589a.88.88 0 0 0-1.018 0m-.87-1.222a2.38 2.38 0 0 1 2.76 0l3.817 2.723a1.56 1.56 0 0 1 0 2.542l-3.817 2.723a2.38 2.38 0 0 1-2.76 0l-3.817-2.723a1.56 1.56 0 0 1 0-2.542z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.49 10.866 7.674 13.59a.06.06 0 0 0 0 .099l3.818 2.723a.88.88 0 0 0 1.018 0l3.818-2.723a.06.06 0 0 0 0-.099l-3.818-2.723a.88.88 0 0 0-1.018 0m-.87-1.221a2.38 2.38 0 0 1 2.76 0l3.817 2.722a1.56 1.56 0 0 1 0 2.542l-3.817 2.723a2.38 2.38 0 0 1-2.76 0l-3.817-2.723a1.56 1.56 0 0 1 0-2.542z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystShortcutAppSquareOutline;
