import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVisaCardBulk = ({
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
      d="M18.095 3.21H6.904C3.971 3.21 2 5.273 2 8.34v7.32c0 3.069 1.971 5.13 4.904 5.13h11.19c2.934 0 4.906-2.061 4.906-5.13V8.34c0-3.068-1.972-5.13-4.905-5.13"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.174 14.69a.75.75 0 0 1-.932-.506l-.581-1.962-.887 2.048a.751.751 0 1 1-1.377-.598l1.71-3.94a.72.72 0 0 1 .734-.45.75.75 0 0 1 .673.535l1.166 3.941a.75.75 0 0 1-.506.932m-4.844-3.669c-.295-.114-.623-.09-.693-.04.013.1.093.183.424.43.196.143.388.292.544.461q.463.53.483 1.111a1.57 1.57 0 0 1-.5 1.194c-.325.3-.745.452-1.217.452-.32 0-.665-.07-1.02-.21a.751.751 0 0 1 .554-1.395c.33.13.585.124.662.056.022-.06 0-.118-.078-.205-.081-.088-.203-.172-.322-.26-.42-.313-1.055-.783-1.011-1.7.026-.507.26-.93.663-1.192.634-.413 1.5-.313 2.05-.102a.75.75 0 0 1-.54 1.4m-3.316 3.057a.75.75 0 1 1-1.485-.213l.565-3.942a.737.737 0 0 1 .849-.635c.41.058.694.438.635.848zM7.7 14.28a.75.75 0 0 1-1.411-.127l-.981-3.942a.749.749 0 1 1 1.455-.363l.46 1.846.89-1.973a.75.75 0 1 1 1.368.617z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVisaCardBulk;
