import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGithubTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.055 16.956C17.953 16.633 21 15.534 21 10.494c0-1.289-.496-2.529-1.385-3.462a4.68 4.68 0 0 0-.083-3.48s-1.09-.323-3.61 1.366a12.36 12.36 0 0 0-6.46 0c-2.52-1.689-3.61-1.366-3.61-1.366a4.68 4.68 0 0 0-.083 3.48 5.02 5.02 0 0 0-1.385 3.49c0 5.002 3.047 6.101 5.945 6.461"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.33 16.984c-.615.636-.93 1.5-.868 2.382v.803C4.846 21.553 4.846 17.86 3 17.399M15.923 20.146v-.78a3.1 3.1 0 0 0-.868-2.409"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystGithubTwoTone;
