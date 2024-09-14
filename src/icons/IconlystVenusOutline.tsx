import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVenusOutline = ({
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
      d="M12.614 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5M2.864 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75-9.75-4.365-9.75-9.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.048 6.1c2.204.954 4.25 1.84 6.606 1.494a.75.75 0 1 1 .218 1.485c-2.798.41-5.226-.647-7.362-1.577l-.523-.227C10.654 6.272 8.66 5.57 6.43 6.485a.75.75 0 0 1-.569-1.389c2.865-1.174 5.403-.195 7.717.8zM7.968 12.655c.973-.723 2.42-.511 3.622.788 1.034 1.117 2.712 1.554 4.528 1.555 1.798 0 3.565-.429 4.578-.851a.75.75 0 0 1 .577 1.385c-1.193.497-3.155.967-5.156.966-1.985-.001-4.177-.468-5.628-2.037-.866-.935-1.464-.723-1.626-.602-.112.083-.151.185-.151.261 0 .057.021.188.221.343 2.096 1.183 2.874 2.509 3.47 3.583l.03.053c.283.512.488.882.768 1.189.265.29.615.538 1.206.71a.75.75 0 1 1-.42 1.44c-.846-.246-1.436-.638-1.894-1.14-.403-.441-.688-.957-.945-1.421l-.057-.104c-.542-.976-1.157-2.033-2.933-3.025a1 1 0 0 1-.074-.047c-.559-.405-.873-.972-.872-1.583 0-.594.301-1.125.756-1.463M9.463 10.57c-1.46-.964-2.732-1.804-4.941-1.295a.75.75 0 1 1-.336-1.462c2.838-.653 4.584.501 6.05 1.47l.095.063c.751.496 1.393.905 2.117 1.115.693.2 1.5.23 2.573-.142a.75.75 0 0 1 .49 1.418c-1.349.467-2.474.456-3.48.164-.975-.283-1.796-.821-2.527-1.303q-.02-.014-.04-.027M18.39 10.744a.75.75 0 0 0-.75.75v.012a.75.75 0 0 0 1.5 0v-.012a.75.75 0 0 0-.75-.75M5.919 10.75a.75.75 0 0 0-.75.75v.011a.75.75 0 0 0 1.5 0V11.5a.75.75 0 0 0-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVenusOutline;
