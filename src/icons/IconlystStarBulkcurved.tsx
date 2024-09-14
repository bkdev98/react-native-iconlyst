import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStarBulkcurved = ({
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
      d="M12.25 2.5c-1.617 0-2.26 1.624-2.827 3.06l-.001.003c-.29.734-.59 1.493-.972 1.89-.376.387-1.27.432-2.135.476h-.013c-1.38.07-3.097.155-3.483 1.8-.367 1.562.78 2.507 1.791 3.341.693.57 1.347 1.11 1.492 1.77.14.64-.071 1.468-.276 2.269v.002l-.001.004c-.352 1.378-.75 2.938.584 3.945.417.315.84.44 1.258.44.905 0 1.787-.584 2.542-1.084l.005-.004c.697-.461 1.418-.937 2.035-.937h.001z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 2.5c1.617 0 2.26 1.624 2.827 3.06l.002.003c.29.734.59 1.493.971 1.89.376.387 1.27.432 2.135.476h.013c1.38.07 3.097.155 3.483 1.8.367 1.562-.78 2.507-1.791 3.341-.692.57-1.346 1.11-1.492 1.77-.14.64.071 1.468.276 2.269v.002l.001.004c.352 1.378.75 2.938-.584 3.945-.417.315-.84.44-1.258.44-.904 0-1.786-.584-2.541-1.084l-.006-.004c-.697-.461-1.418-.937-2.035-.937h-.001z"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystStarBulkcurved;
