import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBankCarrdStarBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m17.967 13.443.837 1.685a.29.29 0 0 0 .217.159l1.876.27a.3.3 0 0 1 .191.111.28.28 0 0 1-.03.374l-1.36 1.314a.28.28 0 0 0-.082.253l.326 1.856a.284.284 0 0 1-.236.322c-.064.01-.129 0-.186-.028l-1.671-.876a.28.28 0 0 0-.269 0l-1.683.88a.294.294 0 0 1-.389-.12c-.03-.055-.04-.118-.03-.18l.326-1.855a.28.28 0 0 0-.082-.254l-1.366-1.313a.285.285 0 0 1-.001-.403.33.33 0 0 1 .165-.08l1.875-.272a.3.3 0 0 0 .217-.159l.837-1.684a.29.29 0 0 1 .386-.128.3.3 0 0 1 .132.128"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.373 19.128H7.215c-2.444 0-3.965-1.724-3.965-4.167V8.373c0-2.44 1.528-4.166 3.965-4.166H8.34M21.25 11.297V8.373c0-2.44-1.52-4.166-3.965-4.166H12.25M3.25 9.505h15.16"
    />
  </Svg>
);
export default IconlystBankCarrdStarBroken;
