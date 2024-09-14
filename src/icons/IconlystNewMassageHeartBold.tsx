import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNewMassageHeartBold = ({
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
      d="M11.601 15.657h-3.75a.75.75 0 0 1 0-1.5h3.75a.75.75 0 0 1 0 1.5m6.867-4.568a2 2 0 0 1-.956-.244c-.368-.2-3.629-2.04-4.525-4.826q0-.001-.002-.004a4.8 4.8 0 0 1 .09-3.232H7.496c-3.118 0-5.213 2.192-5.213 5.454v7.845c0 3.262 2.095 5.454 5.213 5.454h8.324c3.12 0 5.216-2.192 5.216-5.454V9.767c-.785.611-1.452.99-1.607 1.076-.3.164-.63.246-.962.246"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.186 2.565a2.25 2.25 0 0 0-1.716.153 2.25 2.25 0 0 0-1.726-.152c-1.201.388-1.812 1.72-1.392 3.033V5.6c.556 1.724 2.782 2.953 2.878 3.004a.5.5 0 0 0 .479 0c.096-.053 2.34-1.3 2.874-3.004.422-1.313-.19-2.645-1.397-3.035"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystNewMassageHeartBold;
