import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCryingOutline = ({
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
      d="M12.25 3.75A8.25 8.25 0 1 0 18.4 17.5a.75.75 0 0 1 1.117 1 9.73 9.73 0 0 1-7.267 3.25c-5.385 0-9.75-4.366-9.75-9.75a9.75 9.75 0 0 1 9.75-9.75c3.61 0 6.76 1.962 8.445 4.874a.75.75 0 0 1-1.298.752A8.25 8.25 0 0 0 12.25 3.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 14.594c-.886 0-1.708.438-2.285 1.189a.75.75 0 1 1-1.19-.915c.826-1.074 2.069-1.774 3.475-1.774s2.649.7 3.475 1.774a.75.75 0 0 1-1.19.915c-.576-.751-1.399-1.19-2.285-1.19M10.606 8.18a.75.75 0 0 1 .49.94c-.193.61-.639 1.14-1.29 1.377s-1.333.118-1.873-.225a.75.75 0 1 1 .806-1.266c.193.123.392.14.554.082.163-.06.303-.2.372-.42a.75.75 0 0 1 .941-.488M13.771 8.18a.75.75 0 0 1 .941.489c.07.219.21.36.373.419.162.059.36.041.554-.082a.75.75 0 1 1 .805 1.266c-.539.343-1.221.462-1.872.225-.652-.237-1.097-.767-1.29-1.376a.75.75 0 0 1 .49-.941M18.892 9.816l-.185.727-.5-.558a.75.75 0 0 1 .685-.169m.034 1.619q-.076.106-.15.237c-.21.374-.355.848-.225 1.38.123.502.573.735.932.647.358-.088.648-.504.525-1.004-.13-.533-.479-.886-.839-1.12a3 3 0 0 0-.243-.14m1.061-1.117c.56.364 1.227.997 1.478 2.018.298 1.216-.374 2.512-1.624 2.82s-2.448-.53-2.746-1.745c-.251-1.022.046-1.892.373-2.474a4.2 4.2 0 0 1 .709-.925l.018-.017.006-.006.003-.003h.001v-.001l.502.558.185-.727h.002l.004.002.008.002.024.006.075.023c.06.02.143.047.241.086.196.078.46.2.741.383"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCryingOutline;
