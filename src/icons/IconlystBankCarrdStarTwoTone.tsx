import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBankCarrdStarTwoTone = ({
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
      d="m18.216 13.441.838 1.685a.29.29 0 0 0 .217.159l1.876.27a.3.3 0 0 1 .19.111.28.28 0 0 1-.03.374l-1.36 1.314a.28.28 0 0 0-.082.253l.326 1.856a.284.284 0 0 1-.235.322c-.064.01-.13 0-.187-.028l-1.67-.876a.28.28 0 0 0-.269 0l-1.683.88a.294.294 0 0 1-.39-.12.3.3 0 0 1-.029-.18l.325-1.855a.28.28 0 0 0-.081-.254l-1.367-1.313a.284.284 0 0 1 0-.403q0 0 0 0a.32.32 0 0 1 .164-.08l1.876-.272a.3.3 0 0 0 .217-.159l.837-1.684a.3.3 0 0 1 .166-.145.294.294 0 0 1 .351.145"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.5 11.297V8.373c0-2.44-1.52-4.166-3.965-4.166H7.465C5.028 4.207 3.5 5.932 3.5 8.373v6.588c0 2.443 1.52 4.167 3.965 4.167h4.158"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.5 9.506h18"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystBankCarrdStarTwoTone;
