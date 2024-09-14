import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStickerDocumentCloseBulk = ({
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
      d="M14.45 11.369H8.313a.75.75 0 0 1 0-1.5h6.139a.75.75 0 0 1 0 1.5m-2.324 4.554H8.31a.75.75 0 0 1 0-1.5h3.815a.75.75 0 0 1 0 1.5M17.068 3.05H9.625a.31.31 0 0 0-.304.341q.022.238.023.48A5.905 5.905 0 0 1 3.739 9.77a.31.31 0 0 0-.3.308v6.724c0 2.694 2.173 4.899 4.85 4.899h5.745c.28 0 .495-.228.495-.5v-3.498c0-1.988 1.624-3.618 3.593-3.628h3.302a.485.485 0 0 0 .484-.49V7.93c0-2.695-2.162-4.88-4.84-4.88"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.45 11.367H8.313a.75.75 0 0 1 0-1.5h6.139a.75.75 0 0 1 0 1.5m-2.324 4.554H8.31a.75.75 0 0 1 0-1.5h3.815a.75.75 0 0 1 0 1.5M20.941 15.653c-.884-.003-1.927 0-2.676.008-1.19 0-2.17.99-2.17 2.191v2.864c0 .468.563.7.884.363l2.18-2.289 2.151-2.26a.518.518 0 0 0-.369-.877M5.536 6.805a.75.75 0 0 0 1.06 0 .75.75 0 0 0 0-1.061L5.516 4.662l1.08-1.081a.749.749 0 1 0-1.06-1.06L4.455 3.6l-1.081-1.08a.75.75 0 0 0-1.061 1.06l1.08 1.08-1.08 1.083a.75.75 0 0 0 1.06 1.06l1.082-1.081z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStickerDocumentCloseBulk;
