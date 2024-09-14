import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRunBulk = ({
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
      d="M19.188 9.977c-1.271.056-2.72.021-3.824-.658-.385-.237-.744-.562-1.125-.907a19 19 0 0 0-.64-.562c-2.246-1.865-5.681-1.709-7.818.353a1 1 0 1 0 1.388 1.44c1.056-1.019 2.637-1.327 3.974-.894-.818 1.141-1.496 2.521-1.013 4.322.225.84.699 1.452 1.118 1.991.408.53.732.946.785 1.48.105 1.04-.42 2.163-.928 3.248l-.253.547a1.002 1.002 0 0 0 .91 1.413 1 1 0 0 0 .912-.588l.243-.525c.593-1.268 1.266-2.706 1.106-4.295-.111-1.105-.687-1.848-1.194-2.504-.347-.447-.646-.834-.767-1.285-.267-.996.079-1.772.767-2.718q.034.028.067.06c.43.39.877.794 1.42 1.128 1.299.798 2.819.972 4.143.972q.424-.002.817-.02a1 1 0 0 0 .955-1.043c-.024-.552-.511-.97-1.043-.955"
      clipRule="evenodd"
    />
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M8.818 14.517c-.532.289-1.12.567-1.81.654-.445.055-.914.052-1.404.046-.287-.001-.576-.005-.865.004a1 1 0 0 0 .029 1.999h.029c.263-.008.526-.005.788-.003.536.006 1.092.01 1.672-.062 1.022-.127 1.845-.516 2.515-.88a1 1 0 0 0-.954-1.758M15.372 7.23a2.493 2.493 0 0 0 2.49-2.489 2.493 2.493 0 0 0-2.49-2.491 2.49 2.49 0 0 0-2.49 2.491 2.49 2.49 0 0 0 2.49 2.489" />
    </G>
  </Svg>
);
export default IconlystRunBulk;
