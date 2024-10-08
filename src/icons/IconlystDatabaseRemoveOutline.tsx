import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDatabaseRemoveOutline = ({
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
      d="M4.278 5.179a.75.75 0 0 1 .75.75v5.835l.003.015c.005.031.02.092.054.174.067.16.221.423.584.71.736.582 2.388 1.303 6.009 1.303s5.273-.72 6.01-1.303c.361-.287.516-.55.583-.71a1 1 0 0 0 .056-.19V5.93a.75.75 0 0 1 1.5 0v5.858h-.75c.75 0 .75 0 .75.002v.036000000000000004a1.5 1.5 0 0 1-.026.22 2.3 2.3 0 0 1-.148.49c-.164.39-.472.859-1.035 1.304-1.114.882-3.161 1.627-6.94 1.627s-5.826-.745-6.94-1.627c-.563-.445-.871-.914-1.035-1.304a2.3 2.3 0 0 1-.148-.49 2 2 0 0 1-.026-.22v-.036000000000000004c0-.001 0-.002.75-.002h-.75V5.929a.75.75 0 0 1 .75-.75M16.026 16.808a.75.75 0 0 1 1.06 0l1.304 1.3 1.301-1.3a.75.75 0 1 1 1.06 1.06l-1.3 1.3 1.3 1.301a.75.75 0 1 1-1.06 1.061L18.39 20.23l-1.303 1.301a.75.75 0 1 1-1.06-1.06l1.301-1.301-1.301-1.3a.75.75 0 0 1-.001-1.061"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.28 11.037a.75.75 0 0 1 .75.75v5.835q0 .006.002.016c.005.03.02.091.054.174.067.159.221.422.584.71.736.582 2.388 1.302 6.009 1.302a.75.75 0 0 1 0 1.5c-3.779 0-5.826-.745-6.94-1.626-.563-.446-.871-.915-1.035-1.304a2.3 2.3 0 0 1-.17-.653l-.004-.057v-.037000000000000005c0-.001 0-.002.75-.002h-.75v-5.858a.75.75 0 0 1 .75-.75M5.376 5.35c-.281.266-.347.47-.347.606 0 .135.066.34.347.605.282.267.732.542 1.349.788 1.23.492 2.981.813 4.954.813s3.724-.321 4.954-.813c.617-.246 1.067-.521 1.35-.788.28-.265.345-.47.345-.605s-.065-.34-.346-.605c-.282-.267-.732-.542-1.349-.789-1.23-.491-2.982-.812-4.954-.812-1.973 0-3.724.32-4.954.812-.617.247-1.067.522-1.35.789m.792-2.18c1.448-.58 3.397-.92 5.51-.92 2.115 0 4.064.34 5.511.92.722.288 1.357.65 1.823 1.09.468.442.816 1.015.816 1.696s-.348 1.254-.816 1.696c-.466.44-1.1.802-1.823 1.09-1.447.579-3.396.92-5.51.92s-4.063-.341-5.51-.92c-.722-.288-1.357-.65-1.823-1.09-.468-.442-.817-1.015-.817-1.696s.349-1.254.817-1.696c.466-.44 1.1-.802 1.822-1.09"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDatabaseRemoveOutline;
