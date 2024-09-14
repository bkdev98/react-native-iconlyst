import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlaneFlyOutline = ({
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
      d="M18.576 15.21h-.006c-3.338 0-7.28-.014-11.208-.085-3.035-.054-4.854-1.93-4.864-5.019 0-.23.007-1.1.009-1.39a.751.751 0 0 1 1.5-.027c0 .177-.005.513-.007.82h4.0280000000000005l.045-5.482a.75.75 0 0 1 .794-.743q.313.018.617.026.712.008 1.417.11a2.79 2.79 0 0 1 2.035 1.71 196 196 0 0 1 2.085 4.4c-.024.038 0 .047.076.043 1.273-.02 2.334-.03 3.443.03a4.17 4.17 0 0 1 2.9 1.231 2.43 2.43 0 0 1 .535 1.914c-.217 1.692-1.913 2.461-3.399 2.461m-14.5-4.2c.29 1.681 1.422 2.581 3.317 2.615 3.916.071 7.85.082 11.183.084.711 0 1.8-.306 1.912-1.152a.94.94 0 0 0-.2-.763 2.68 2.68 0 0 0-1.828-.7c-1.06-.057-2.1-.048-3.338-.027a1.47 1.47 0 0 1-1.465-.92 184 184 0 0 0-2.07-4.369c-.343-.706-.678-.845-.931-.887a9 9 0 0 0-1.088-.082l-.045 5.454a.75.75 0 0 1-.75.744h-2.8c-.672.002-1.325.002-1.901.002zM19.004 20.717H5.494a.75.75 0 1 1 0-1.5h13.51a.75.75 0 0 1 0 1.5"
    />
  </Svg>
);
export default IconlystPlaneFlyOutline;
