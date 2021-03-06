import { useTheme } from '@/utils/themeContext';
import Launch from '@/public/images/icons/launch.svg';
import Aside from '@/components/WorkPagesLayout/Aside/Aside';
import { Work as WorkType } from '@/types/works';
import { useIntl } from 'react-intl';

export default function WorkCard1({
  contentHtml,
  title,
  webLink,
  githubLink,
  tags,
  role,
}: Partial<WorkType>) {
  const { isFontLoaded } = useTheme();
  const { formatMessage: f } = useIntl();
  return (
    <div>
      <h1 className={`inner-wrap font-bold text-2xl font-display `}>
        <span className={`inline-block ${!isFontLoaded && 'skeleton'}`}>
          {title}
        </span>
      </h1>
      <div className="mt-5">
        <article
          className={`text-sm leading-relaxed inline-block ${
            isFontLoaded ? 'markdown-style' : 'skeleton'
          }`}
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />

        <div className="tablet:hidden desktop:hidden mobile:block mobile:mt-5">
          <Aside tags={tags} role={role} />
        </div>
        {webLink && (
          <a
            href={webLink}
            target="_blank"
            className={`font-bold text-indigo-400 inline-block mt-5`}
            rel="noopener"
          >
            <span className={`inline-block underline mr-1`}>
              {f({ id: 'workpages.description.weblink' })}
            </span>
            <span>
              <Launch className="inline-block fill-current" width="1rem" />
            </span>
          </a>
        )}

        <br />
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            className={`font-bold text-indigo-400 inline-block mt-2 `}
            rel="noopener"
          >
            <span
              className={`inline-block underline mr-1 ${
                !isFontLoaded && 'skeleton'
              }`}
            >
              {f({ id: 'workpages.description.gitlink' })}
            </span>
            <span>
              <Launch className="inline-block fill-current" width="1rem" />
            </span>
          </a>
        )}
      </div>
    </div>
  );
}
