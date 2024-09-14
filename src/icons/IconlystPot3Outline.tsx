import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPot3Outline = ({
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
      d="M14.244 5.215q-.18-.045-.362-.083.125-.33.126-.702a2.01 2.01 0 1 0-3.95.524l.026.088q.012.04.027.08l.003.008c-2.556.53-4.658 2.145-5.465 4.567q-.075.227-.136.463h-.929c-.805 0-1.43.71-1.322 1.51l.18 1.36.001.01a1.72 1.72 0 0 0 1.7 1.48h.15v1.92c0 1.29.405 2.46 1.195 3.31.796.85 1.927 1.33 3.25 1.33h6.519c1.324 0 2.455-.48 3.251-1.33.791-.85 1.195-2.02 1.195-3.31l-.004-1.92h.159a1.72 1.72 0 0 0 1.7-1.48l.001-.01.18-1.36a1.335 1.335 0 0 0-1.321-1.51h-.944c-.65-2.555-2.686-4.301-5.23-4.945m3.95 6.745.003 1.701a.7.7 0 0 0 0 .213v.006l.006 2.56c0 .99-.304 1.76-.792 2.29-.483.51-1.2.85-2.154.85H8.739c-.954 0-1.67-.34-2.153-.85-.488-.53-.792-1.3-.792-2.29v-4.48q0-.078.002-.155l.004-.135v-.01h12.386q.008.148.008.3m-.288-1.8H6.08c.78-2.297 3.066-3.72 5.913-3.72 2.648 0 4.81 1.232 5.727 3.253q.104.227.185.467m-14.131 1.5h.524q-.005.15-.005.3v1.06h-.151l-.039-.004a.22.22 0 0 1-.174-.186zm16.083 1.36c.106 0 .2-.08.215-.19l.154-1.17h-.54l.002.022q.005.138.005.278l.002 1.06zm-8.37-8.59a.51.51 0 1 0 1.022-.001.51.51 0 0 0-1.021.001"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPot3Outline;
