import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStoreBold = ({
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
      d="M12.47 17.948c-.917 0-1.664.744-1.664 1.657v1.914a.3.3 0 0 0 .3.3h2.728a.3.3 0 0 0 .3-.3v-1.914c0-.913-.747-1.657-1.664-1.657M19.497 5.937q.231.001.453.038c.174.028.34-.1.34-.276a2.246 2.246 0 0 0-2.249-2.24H6.9a2.246 2.246 0 0 0-2.248 2.24c0 .177.166.305.34.276q.223-.037.454-.038z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.123 15.397q-.064 0-.128-.006c-.182-.015-.344.118-.344.301v3.876a2.25 2.25 0 0 0 2.248 2.25h2.107a.3.3 0 0 0 .3-.3v-1.913a3.164 3.164 0 0 1 6.328 0v1.913a.3.3 0 0 0 .3.3h2.107a2.25 2.25 0 0 0 2.248-2.25V15.69c0-.182-.16-.315-.342-.3a2 2 0 0 1-.128.006zM21.95 11.572l-.322-2.44c-.148-1.11-1.064-1.944-2.131-1.944H5.445c-1.067 0-1.983.835-2.131 1.944l-.322 2.44a2.33 2.33 0 0 0 .55 1.847 2.1 2.1 0 0 0 1.58.729H19.82a2.1 2.1 0 0 0 1.58-.73c.44-.5.64-1.173.55-1.846"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStoreBold;
