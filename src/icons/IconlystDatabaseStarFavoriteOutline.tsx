import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDatabaseStarFavoriteOutline = ({
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
      d="M17.48 15.578 17 16.588a.75.75 0 0 1-.564.42l-1.14.174.847.864a.75.75 0 0 1 .204.646l-.192 1.174.963-.529a.75.75 0 0 1 .722 0l.962.529-.193-1.174a.75.75 0 0 1 .205-.646l.847-.864-1.14-.174a.75.75 0 0 1-.565-.42zm.954-1.489a1.05 1.05 0 0 0-1.91 0l-.708 1.496-1.575.241c-.9.137-1.172 1.23-.59 1.819l1.156 1.18-.275 1.679c-.127.786.698 1.588 1.55 1.114l1.398-.768 1.397.769c.853.473 1.677-.329 1.55-1.115l-.275-1.68 1.156-1.179c.582-.589.31-1.682-.59-1.819l-1.576-.24zM3.633 5.154a.75.75 0 0 1 .75.75v5.786l.002.015c.006.03.02.09.054.171.066.157.218.418.577.702.728.576 2.364 1.29 5.954 1.29a.75.75 0 0 1 0 1.5c-3.747 0-5.78-.738-6.886-1.614-.558-.443-.865-.909-1.028-1.296a2.3 2.3 0 0 1-.169-.65l-.003-.056-.001-.022v-.015c0-.001 0-.002.75-.002h-.75V5.904a.75.75 0 0 1 .75-.75M18.309 5.154a.75.75 0 0 1 .75.75v4.841a.75.75 0 0 1-1.5 0v-4.84a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.633 10.963a.75.75 0 0 1 .75.75v5.786l.002.015c.006.03.02.09.054.171.066.157.218.418.577.702.728.576 2.364 1.29 5.954 1.29a.75.75 0 0 1 0 1.5c-3.747 0-5.78-.738-6.886-1.614-.558-.442-.865-.908-1.028-1.296a2.3 2.3 0 0 1-.169-.649l-.003-.057-.001-.021v-.016l.75-.001h-.75v-5.81a.75.75 0 0 1 .75-.75M4.726 5.225c-.277.264-.343.47-.343.608s.066.343.343.608c.28.266.723.54 1.334.786 1.216.491 2.948.812 4.9.812s3.684-.32 4.9-.812c.611-.246 1.055-.52 1.334-.786.277-.265.343-.47.343-.608s-.066-.344-.343-.608c-.28-.266-.723-.54-1.333-.787-1.217-.49-2.95-.811-4.9-.811-1.953 0-3.685.32-4.901.811-.61.246-1.055.52-1.334.787m.772-2.178c1.436-.579 3.367-.92 5.462-.92s4.026.341 5.462.92c.715.289 1.345.651 1.807 1.093.464.442.808 1.014.808 1.693 0 .678-.344 1.25-.808 1.693-.462.441-1.091.804-1.807 1.092-1.436.58-3.367.92-5.462.92s-4.026-.34-5.462-.92c-.715-.288-1.345-.65-1.807-1.092-.464-.443-.808-1.015-.808-1.693s.344-1.25.808-1.693c.462-.442 1.092-.804 1.807-1.093"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDatabaseStarFavoriteOutline;