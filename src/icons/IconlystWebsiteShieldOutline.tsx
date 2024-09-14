import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebsiteShieldOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.223 4.14c.96-1.03 2.326-1.605 3.937-1.605h8.18c1.616 0 2.982.575 3.94 1.605.954 1.024 1.449 2.437 1.449 4.02v3.933a.75.75 0 1 1-1.5 0V8.16c0-1.274-.395-2.298-1.046-2.998-.645-.693-1.598-1.127-2.843-1.127H8.16c-1.24 0-2.193.434-2.84 1.128-.652.7-1.049 1.724-1.049 2.997v7.707c0 1.273.395 2.298 1.046 2.997.645.693 1.598 1.127 2.843 1.127h1.697a.75.75 0 0 1 0 1.5H8.16c-1.615 0-2.982-.575-3.94-1.605-.954-1.024-1.449-2.436-1.449-4.019V8.16c0-1.584.498-2.997 1.452-4.02"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.914 6.727a.75.75 0 0 1 .75-.75h.064a.75.75 0 1 1 0 1.5h-.064a.75.75 0 0 1-.75-.75m2.55 0a.75.75 0 0 1 .75-.75h.064a.75.75 0 1 1 0 1.5h-.064a.75.75 0 0 1-.75-.75m2.55 0a.75.75 0 0 1 .75-.75h.064a.75.75 0 0 1 0 1.5h-.064a.75.75 0 0 1-.75-.75M2.771 9.578a.75.75 0 0 1 .75-.75H20.98a.75.75 0 0 1 0 1.5H3.52a.75.75 0 0 1-.75-.75M16.442 13.17a2 2 0 0 1 .397-.053c.14 0 .29.03.397.053.124.027.266.064.415.107.298.085.65.2.994.32.343.122.688.253.969.373.14.06.272.121.385.18.085.045.245.131.368.255l.001.001.01.01c.063.063.207.208.29.438.072.202.078.416.08.58q0 .207-.008.561l-.005.234c-.006.36-.013.841-.013 1.49 0 1.648-.997 2.736-1.879 3.37a6.8 6.8 0 0 1-1.734.894l-.035.011-.011.004-.004.001h-.002s-.001.001-.218-.717L16.62 22h-.002l-.004-.002-.011-.004-.036-.011-.12-.041a6.793 6.793 0 0 1-1.615-.852c-.88-.635-1.877-1.723-1.877-3.372a76 76 0 0 0-.019-1.726q-.008-.352-.007-.56a1.8 1.8 0 0 1 .08-.58 1.2 1.2 0 0 1 .303-.45m3.526 6.88L16.62 22a.75.75 0 0 0 .435 0zm0-.797a5.296 5.296 0 0 1-1.128-.613c-.686-.493-1.255-1.187-1.255-2.154a78 78 0 0 0-.02-1.778c-.004-.221-.007-.373-.006-.488q.09-.045.225-.102c.241-.104.553-.223.876-.337s.646-.219.908-.294a6 6 0 0 1 .4-.099l.076.015q.125.028.324.084c.262.075.585.18.908.293.323.114.635.233.875.337q.136.058.225.102c.001.115-.002.269-.006.494l-.005.256c-.007.367-.014.857-.014 1.517 0 .967-.57 1.661-1.255 2.154a5.3 5.3 0 0 1-1.128.613m-.397-7.315a7 7 0 0 0-.416.107zm-.416.107c-.298.086-.65.2-.994.321zm-.994.321c-.343.121-.688.253-.968.373zm-.968.373c-.14.06-.272.12-.384.18zm-.384.18c-.085.044-.245.13-.367.251z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWebsiteShieldOutline;