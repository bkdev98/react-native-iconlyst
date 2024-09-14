import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHomeAiAltOutline = ({
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
      d="M9.653 3.061a3.76 3.76 0 0 1 4.667 0l.002.002 6.227 4.971a3.06 3.06 0 0 1 1.2 2.38v10.585a.75.75 0 0 1-1.5 0V10.433a1.56 1.56 0 0 0-.615-1.21l-.014-.011-6.231-4.974-.001-.001a2.26 2.26 0 0 0-2.803 0L4.382 9.214l-.018.013c-.38.288-.607.735-.614 1.211v10.56a.75.75 0 0 1-1.5 0V10.426c.01-.938.454-1.82 1.2-2.388z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.71 13.388a.75.75 0 0 1 .703.49l.114.31a3.52 3.52 0 0 0 2.078 2.08l.31.116a.75.75 0 0 1 0 1.406l-.31.115a3.52 3.52 0 0 0-2.078 2.08l-.114.31a.75.75 0 0 1-1.407 0l-.115-.31a3.52 3.52 0 0 0-2.078-2.08l-.31-.115a.75.75 0 0 1 0-1.406l.31-.115a3.52 3.52 0 0 0 2.078-2.081l.115-.31a.75.75 0 0 1 .703-.49m-1.25 3.699c.487.34.91.763 1.25 1.25.338-.487.761-.91 1.248-1.25a5 5 0 0 1-1.249-1.25c-.339.487-.762.91-1.25 1.25M8.275 10.492a.75.75 0 0 1 .717.531c.163.536.582.955 1.116 1.118a.75.75 0 0 1 0 1.435 1.68 1.68 0 0 0-1.116 1.117.75.75 0 0 1-1.435 0 1.68 1.68 0 0 0-1.115-1.117.75.75 0 0 1 0-1.435 1.68 1.68 0 0 0 1.115-1.118.75.75 0 0 1 .718-.531m-.154 2.366q.08.074.154.154.074-.08.153-.154-.08-.074-.153-.154-.074.08-.154.154"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHomeAiAltOutline;
