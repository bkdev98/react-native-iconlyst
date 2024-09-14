import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPenAiOutline = ({
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
      d="M7.371 9.687a.75.75 0 0 1-.704-.49l-.089-.241A2.57 2.57 0 0 0 5.06 7.434l-.241-.09a.75.75 0 0 1 0-1.406l.24-.09a2.57 2.57 0 0 0 1.52-1.521l.09-.241a.75.75 0 0 1 1.406 0l.09.241c.26.705.815 1.261 1.519 1.522l.241.089a.75.75 0 0 1 0 1.407l-.241.089a2.57 2.57 0 0 0-1.52 1.522l-.089.241a.75.75 0 0 1-.703.49m.693-3.046a4 4 0 0 1-.693-.694 4 4 0 0 1-.693.694q.388.306.693.694.304-.388.693-.694M4.04 13.88a.75.75 0 0 1-.718-.532.81.81 0 0 0-.54-.541.75.75 0 0 1 0-1.435.81.81 0 0 0 .54-.541.75.75 0 0 1 1.435 0c.079.26.282.462.54.541a.75.75 0 0 1 0 1.435.81.81 0 0 0-.54.541.75.75 0 0 1-.718.532M14.303 7.197a.75.75 0 0 1 1.048-.16l4.33 3.181a.75.75 0 0 1-.889 1.21l-4.33-3.182a.75.75 0 0 1-.16-1.049"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.909 4.33c.772.14 1.488.6 2.016.988s1.18.935 1.542 1.63c.189.363.31.784.278 1.25-.03.466-.21.918-.525 1.347l-.009.011-7.216 9.423a2.64 2.64 0 0 1-1.734 1.04l-2.503.37a1.38 1.38 0 0 1-1.564-1.15l-.392-2.5.741-.117-.74.116a2.64 2.64 0 0 1 .48-1.97l.01-.012 7.215-9.423c.315-.425.692-.729 1.126-.896a2.35 2.35 0 0 1 1.275-.106m-.735 1.506c-.127.049-.287.154-.462.393l-.009.011-7.215 9.422c-.177.243-.25.547-.204.844l.373 2.382 2.385-.353c.3-.044.57-.207.75-.45l.008-.012 7.215-9.422c.172-.236.225-.418.234-.553a.85.85 0 0 0-.112-.456c-.193-.37-.6-.747-1.101-1.116-.502-.369-.982-.645-1.393-.72a.85.85 0 0 0-.469.03m-7.498 13.17"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPenAiOutline;