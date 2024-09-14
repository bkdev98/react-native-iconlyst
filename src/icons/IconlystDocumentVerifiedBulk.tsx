import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocumentVerifiedBulk = ({
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
      d="M9 13.489H7.416a.75.75 0 0 1 0-1.5H9a.75.75 0 0 1 0 1.5M7.417 7.793H11.3a.75.75 0 0 1 0 1.5H7.416a.75.75 0 0 1 0-1.5m3.962 11.106-.186-.187a2.5 2.5 0 0 1-.74-1.773 2.5 2.5 0 0 1 .73-1.788l.036-.036.16-.16v-.266a2.53 2.53 0 0 1 2.52-2.524h.273l.182-.182a2.5 2.5 0 0 1 1.776-.744h.012a2.5 2.5 0 0 1 1.812.768l.159.158h.269c.235 0 .458.042.674.103V7.16a4.403 4.403 0 0 0-4.397-4.398H7.944A4.403 4.403 0 0 0 3.547 7.16v9.235a4.4 4.4 0 0 0 4.397 4.396h4.04a2.5 2.5 0 0 1-.606-1.622z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m17.894 16.553-1.726 1.727a.653.653 0 0 1-.92-.001l-.837-.84a.65.65 0 1 1 .92-.918l.378.379 1.266-1.267a.65.65 0 1 1 .919.92m2.139-.639-.296-.296a.44.44 0 0 1-.125-.304v-.423c0-.79-.642-1.433-1.432-1.433h-.425a.43.43 0 0 1-.303-.125l-.302-.301c-.272-.27-.611-.443-1.016-.416a1.42 1.42 0 0 0-1.008.423l-.294.294a.43.43 0 0 1-.305.125h-.425a1.435 1.435 0 0 0-1.43 1.432l-.001.423a.44.44 0 0 1-.125.304l-.273.275q-.017.013-.03.027a1.42 1.42 0 0 0-.415 1.015c.002.382.152.741.42 1.007l.297.298a.43.43 0 0 1 .127.302v.427c0 .789.642 1.432 1.43 1.432h.424c.113 0 .223.046.303.124l.303.302c.27.268.628.415 1.008.415h.005a1.42 1.42 0 0 0 1.008-.42l.299-.298a.42.42 0 0 1 .302-.125h.428c.788 0 1.43-.641 1.43-1.43v-.426c0-.114.046-.222.124-.302l.302-.301a1.435 1.435 0 0 0-.005-2.025M9 13.489H7.416a.75.75 0 0 1 0-1.5H9a.75.75 0 0 1 0 1.5M7.417 7.793H11.3a.75.75 0 0 1 0 1.5H7.416a.75.75 0 0 1 0-1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDocumentVerifiedBulk;
