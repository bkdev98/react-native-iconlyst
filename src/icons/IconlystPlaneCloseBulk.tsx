import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlaneCloseBulk = ({
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
      d="M9.203 15.354a626 626 0 0 0 10.21-4.225c1.356-.569 2.608-1.924 2.154-3.553-.195-.696-.618-1.229-1.225-1.54-1.166-.6-2.569-.203-3.11-.005-1.09.385-2.133.845-3.217 1.285-1.175-1.084-2.378-2.138-3.58-3.192-.818-.719-1.666-.978-2.51-.777-.489.112-.95.29-1.399.462q-.252.098-.512.194a.747.747 0 0 0-.439.992l2.06 4.988-1.785.753c-.65.276-1.302.551-1.854.783l-.302-.734a.748.748 0 1 0-1.388.566c.09.221.446 1.085.541 1.311.875 2.052 2.38 3.141 4.212 3.141.675 0 1.395-.147 2.144-.449"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.53 19.219H4.945a.75.75 0 0 0 0 1.5h8.585a.75.75 0 0 0 0-1.5M21.53 19.348l-1.217-1.216 1.182-1.184a.749.749 0 1 0-1.063-1.059l-1.179 1.182-1.213-1.213a.75.75 0 0 0-1.06 1.06l1.214 1.215-1.184 1.185a.75.75 0 0 0 1.063 1.06l1.182-1.185 1.214 1.216a.75.75 0 0 0 1.061-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPlaneCloseBulk;
