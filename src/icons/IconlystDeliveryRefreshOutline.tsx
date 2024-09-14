import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeliveryRefreshOutline = ({
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
      d="m14.805 2.292-6.963.016c-1.647.004-3.041.596-4.019 1.65C2.851 5.004 2.346 6.45 2.35 8.07l.018 7.904c.004 1.62.513 3.062 1.49 4.105.981 1.05 2.379 1.635 4.03 1.63h.002l3.945-.019a.75.75 0 1 0-.008-1.5l-3.942.02c-1.281.003-2.265-.442-2.932-1.155-.673-.72-1.082-1.775-1.085-3.085L3.85 8.068c-.003-1.309.402-2.366 1.073-3.09.665-.717 1.647-1.166 2.923-1.169l.632-.001.008 5.89a.75.75 0 0 0 .985.711l2.602-.858 2.587.842a.75.75 0 0 0 .982-.714l-.015-5.888h.608c1.28-.004 2.264.44 2.932 1.154.673.72 1.082 1.775 1.085 3.084v.004l.018 2.334a.75.75 0 0 0 1.5-.012l-.018-2.33v-.001c-.004-1.619-.514-3.06-1.49-4.104-.982-1.05-2.38-1.634-4.03-1.63l-1.289.003a1 1 0 0 0-.138 0M9.978 3.804l.006 4.855 1.853-.61a.75.75 0 0 1 .467-.001l1.835.598-.012-4.852zm5.519 10.212a4.102 4.102 0 1 1-1.259 5.553.75.75 0 0 1 1.283-.778 2.602 2.602 0 1 0 .93-3.602h.156a.75.75 0 0 1 0 1.5h-1.813a.75.75 0 0 1-.793-.75v-1.845a.75.75 0 0 1 1.496-.078"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDeliveryRefreshOutline;
