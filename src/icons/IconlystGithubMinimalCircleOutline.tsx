import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGithubMinimalCircleOutline = ({
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
      d="M12 21.75c-5.38 0-9.75-4.37-9.75-9.75S6.62 2.25 12 2.25s9.75 4.37 9.75 9.75-4.37 9.75-9.75 9.75m0-18c-4.55 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25"
    />
    <Path
      fill={props.color}
      d="M12 17.211c-2.78 0-5.74-1.21-5.74-4.62 0-.82.26-1.61.75-2.26-.17-.74-.11-1.51.2-2.21.09-.2.26-.36.47-.42.22-.07 1.03-.2 2.52.73 1.19-.27 2.42-.27 3.61 0 1.5-.93 2.3-.8 2.52-.73.21.06.38.22.47.42.3.7.37 1.47.2 2.21.48.65.75 1.43.75 2.25 0 3.41-2.96 4.63-5.74 4.63zm-3.57-7.99c-.05.34-.01.69.11 1.02.1.27.04.57-.16.78-.4.42-.63.98-.62 1.57 0 2.9 3.25 3.12 4.24 3.12 1.28 0 4.24-.31 4.24-3.13 0-.58-.22-1.14-.62-1.56a.75.75 0 0 1-.16-.78c.12-.33.16-.68.11-1.02-.25.09-.65.26-1.21.64-.18.12-.41.16-.62.1a6.63 6.63 0 0 0-3.48 0c-.21.06-.44.02-.62-.1-.55-.37-.94-.54-1.21-.63z"
    />
  </Svg>
);
export default IconlystGithubMinimalCircleOutline;
